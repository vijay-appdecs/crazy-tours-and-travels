import os
from pypdf import PdfReader

pdf_dir = r"C:\Users\vijay\.gemini\antigravity-ide\brain\c967ed45-0d77-46ea-995f-7334c30f7c73\.user_uploaded"
for f in sorted(os.listdir(pdf_dir)):
    if f.endswith('.pdf'):
        full_path = os.path.join(pdf_dir, f)
        reader = PdfReader(full_path)
        print("="*60)
        print(f"FILE: {f} (Pages: {len(reader.pages)})")
        for i, page in enumerate(reader.pages):
            text = page.extract_text() or ""
            first_lines = "\n".join([line.strip() for line in text.split("\n") if line.strip()][:6])
            print(f"--- Page {i+1} ---")
            print(first_lines)
