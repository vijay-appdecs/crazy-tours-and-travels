from PIL import Image

im = Image.open('screenshots/home_updated_sections.png')
w, h = im.size
print('Total size:', w, h)
im.crop((0, 2400, w, 3600)).save('screenshots/slice_2400_3600.png')
im.crop((0, 3600, w, 4800)).save('screenshots/slice_3600_4800.png')
print('Done cropping')
