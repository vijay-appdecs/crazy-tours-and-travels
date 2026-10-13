const fs = require('fs');
let html = fs.readFileSync('trip-detail.html', 'utf8');

// 1. Add CSS for Calendar Popover
const calCSS = `
    /* Interactive Calendar Popover */
    .wf-date-popover {
      position: absolute;
      top: calc(100% + 6px);
      right: 0;
      width: 280px;
      background: #FFFFFF;
      border: 1px solid var(--color-line);
      border-radius: 16px;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
      padding: 12px 14px;
      z-index: 100;
      font-family: var(--font-sans);
    }

    .wf-cal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .wf-cal-title {
      font-size: 13px;
      font-weight: 700;
      color: var(--color-ink);
    }

    .wf-cal-nav-btn {
      background: transparent;
      border: 1px solid var(--color-line);
      width: 26px;
      height: 26px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 14px;
      color: var(--color-ink);
      transition: background 150ms ease;
    }

    .wf-cal-nav-btn:hover {
      background: var(--color-shell);
    }

    .wf-cal-weekdays {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      text-align: center;
      font-size: 10.5px;
      font-weight: 600;
      color: var(--color-muted);
      margin-bottom: 4px;
    }

    .wf-cal-days-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 1px;
      row-gap: 2px;
    }

    .wf-cal-day {
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 500;
      color: var(--color-ink);
      border-radius: 4px;
      cursor: pointer;
      transition: all 120ms ease;
      user-select: none;
    }

    .wf-cal-day:hover:not(.is-disabled):not(.is-empty) {
      background: var(--color-shell);
    }

    .wf-cal-day.is-empty {
      cursor: default;
    }

    .wf-cal-day.is-disabled {
      color: #D1D5DB;
      cursor: not-allowed;
      text-decoration: line-through;
    }

    .wf-cal-day.is-in-range {
      background: rgba(234, 46, 0, 0.12);
      color: var(--color-sun);
      font-weight: 600;
      border-radius: 0;
    }

    .wf-cal-day.is-start-date {
      background: var(--color-sun) !important;
      color: #FFFFFF !important;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      font-weight: 700;
    }

    .wf-cal-day.is-end-date {
      background: var(--color-sun) !important;
      color: #FFFFFF !important;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      font-weight: 700;
    }

    .wf-cal-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid var(--color-line);
    }

    .wf-cal-info {
      font-size: 10.5px;
      color: var(--color-body);
      font-weight: 600;
      flex: 1;
    }

    .wf-cal-done-btn {
      background: var(--color-sun);
      color: #FFFFFF;
      border: none;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 150ms ease;
    }

    .wf-cal-done-btn:hover {
      opacity: 0.9;
    }
`;

// Insert calCSS before </style>
html = html.replace('</style>', `${calCSS}\n  </style>`);

// 2. Update Travel Date input markup to include popover
const oldDateInput = `<div class="wf-form-group">
                  <label for="book-date" class="wf-form-label">Travel Date</label>
                  <input type="text" id="book-date" placeholder="e.g. 25 Oct" class="wf-form-input">
                </div>`;

const newDateInput = `<div class="wf-form-group" style="position: relative;">
                  <label for="book-date" class="wf-form-label">Travel Date</label>
                  <input type="text" id="book-date" readonly placeholder="Select date" class="wf-form-input" style="cursor: pointer; background: #FFFFFF;" autocomplete="off">
                  
                  <!-- Calendar Popover -->
                  <div id="trip-date-popover" class="wf-date-popover" style="display: none;">
                    <div class="wf-cal-header">
                      <button type="button" class="wf-cal-nav-btn" id="cal-prev-month" aria-label="Previous Month">‹</button>
                      <span class="wf-cal-title" id="cal-month-title">October 2026</span>
                      <button type="button" class="wf-cal-nav-btn" id="cal-next-month" aria-label="Next Month">›</button>
                    </div>
                    <div class="wf-cal-weekdays">
                      <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                    </div>
                    <div class="wf-cal-days-grid" id="cal-days-grid"></div>
                    <div class="wf-cal-footer">
                      <div class="wf-cal-info" id="cal-selected-info"></div>
                      <button type="button" class="wf-cal-done-btn" id="cal-done-btn">Done</button>
                    </div>
                  </div>
                </div>`;

html = html.replace(oldDateInput, newDateInput);

// 3. Add JS for Interactive Calendar Logic
const calJS = `
      // 7.1 Interactive Calendar Range Picker with Auto Package Duration
      const pkgDays = trip.days || 4;
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // Default start date: tomorrow
      let selectedStart = new Date(today);
      selectedStart.setDate(selectedStart.getDate() + 1);
      selectedStart.setHours(0, 0, 0, 0);

      let calViewYear = selectedStart.getFullYear();
      let calViewMonth = selectedStart.getMonth();

      function getSelectedEnd(start) {
        const end = new Date(start);
        end.setDate(start.getDate() + (pkgDays - 1));
        end.setHours(0, 0, 0, 0);
        return end;
      }

      function formatCalDate(d) {
        return d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
      }

      function updateDateInputField() {
        const end = getSelectedEnd(selectedStart);
        const textVal = \`\${formatCalDate(selectedStart)} – \${formatCalDate(end)} (\${pkgDays} Days)\`;
        const dateInput = document.getElementById('book-date');
        if (dateInput) {
          dateInput.value = textVal;
        }
        const infoEl = document.getElementById('cal-selected-info');
        if (infoEl) {
          infoEl.textContent = \`\${textVal}\`;
        }
      }

      function renderCalendarGrid() {
        const titleEl = document.getElementById('cal-month-title');
        const gridEl = document.getElementById('cal-days-grid');
        if (!titleEl || !gridEl) return;

        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        titleEl.textContent = \`\${monthNames[calViewMonth]} \${calViewYear}\`;

        gridEl.innerHTML = '';

        const firstDayOfMonth = new Date(calViewYear, calViewMonth, 1).getDay();
        const daysInMonth = new Date(calViewYear, calViewMonth + 1, 0).getDate();

        // Empty cells before month start
        for (let i = 0; i < firstDayOfMonth; i++) {
          const emptyCell = document.createElement('div');
          emptyCell.className = 'wf-cal-day is-empty';
          gridEl.appendChild(emptyCell);
        }

        const selectedEnd = getSelectedEnd(selectedStart);

        for (let day = 1; day <= daysInMonth; day++) {
          const cellDate = new Date(calViewYear, calViewMonth, day);
          cellDate.setHours(0, 0, 0, 0);

          const dayCell = document.createElement('div');
          dayCell.className = 'wf-cal-day';
          dayCell.textContent = day;

          if (cellDate < today) {
            dayCell.classList.add('is-disabled');
          } else {
            const isStart = cellDate.getTime() === selectedStart.getTime();
            const isEnd = cellDate.getTime() === selectedEnd.getTime();
            const inRange = cellDate.getTime() >= selectedStart.getTime() && cellDate.getTime() <= selectedEnd.getTime();

            if (inRange) dayCell.classList.add('is-in-range');
            if (isStart) dayCell.classList.add('is-start-date');
            if (isEnd) dayCell.classList.add('is-end-date');

            dayCell.addEventListener('click', (e) => {
              e.stopPropagation();
              selectedStart = new Date(cellDate);
              updateDateInputField();
              renderCalendarGrid();
            });
          }

          gridEl.appendChild(dayCell);
        }
      }

      const dateInputEl = document.getElementById('book-date');
      const datePopoverEl = document.getElementById('trip-date-popover');
      const calPrevBtn = document.getElementById('cal-prev-month');
      const calNextBtn = document.getElementById('cal-next-month');
      const calDoneBtn = document.getElementById('cal-done-btn');

      if (dateInputEl && datePopoverEl) {
        updateDateInputField();
        renderCalendarGrid();

        dateInputEl.addEventListener('click', (e) => {
          e.stopPropagation();
          const isVisible = datePopoverEl.style.display === 'block';
          datePopoverEl.style.display = isVisible ? 'none' : 'block';
          if (!isVisible) {
            calViewYear = selectedStart.getFullYear();
            calViewMonth = selectedStart.getMonth();
            renderCalendarGrid();
          }
        });

        datePopoverEl.addEventListener('click', (e) => e.stopPropagation());

        if (calPrevBtn) {
          calPrevBtn.addEventListener('click', () => {
            calViewMonth--;
            if (calViewMonth < 0) {
              calViewMonth = 11;
              calViewYear--;
            }
            renderCalendarGrid();
          });
        }

        if (calNextBtn) {
          calNextBtn.addEventListener('click', () => {
            calViewMonth++;
            if (calViewMonth > 11) {
              calViewMonth = 0;
              calViewYear++;
            }
            renderCalendarGrid();
          });
        }

        if (calDoneBtn) {
          calDoneBtn.addEventListener('click', () => {
            datePopoverEl.style.display = 'none';
          });
        }

        document.addEventListener('click', () => {
          datePopoverEl.style.display = 'none';
        });
      }
`;

// Insert calJS before `// 8. Trip Gallery & Lightbox`
html = html.replace('// 8. Trip Gallery & Lightbox', `${calJS}\n      // 8. Trip Gallery & Lightbox`);

fs.writeFileSync('trip-detail.html', html, 'utf8');
console.log('trip-detail.html updated with Calendar Popover successfully!');
