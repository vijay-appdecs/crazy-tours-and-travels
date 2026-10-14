import os
from pypdf import PdfReader
from PIL import Image
import io

pdf_dir = r"C:\Users\vijay\.gemini\antigravity-ide\brain\c967ed45-0d77-46ea-995f-7334c30f7c73\.user_uploaded"
dump_dir = r"scratch\extracted_c967"
os.makedirs(dump_dir, exist_ok=True)

for f in sorted(os.listdir(pdf_dir)):
    if f.endswith('.pdf'):
        base = f.replace('.pdf', '')
        reader = PdfReader(os.path.join(pdf_dir, f))
        print(f"Extracting {f}...")
        for i, page in enumerate(reader.pages):
            for img_idx, img in enumerate(page.images):
                # only take the image corresponding to the page index if multiple
                if img_idx == i or len(page.images) == 1:
                    out_path = os.path.join(dump_dir, f"{base}_p{i+1}.png")
                    image = Image.open(io.BytesIO(img.data))
                    image.save(out_path)
                    print(f"  Saved {out_path} ({image.size})")
