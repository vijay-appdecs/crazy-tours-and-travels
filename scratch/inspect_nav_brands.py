import glob, re

for f in sorted(glob.glob('*.html')):
    content = open(f, encoding='utf-8', errors='ignore').read()
    brands = re.findall(r'<a href="index\.html"[^>]*class="([^"]*brand[^"]*)"[^>]*>([\s\S]*?)</a>', content)
    if brands:
        print(f"{f}: found {len(brands)} brand links")
        for cls, inner in brands[:2]:
            img = re.findall(r'<img[^>]*>', inner)
            print(f"   class={cls} img={img}")
