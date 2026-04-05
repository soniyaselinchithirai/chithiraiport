import sys
import subprocess

def extract_pdf():
    pdf_path = sys.argv[1]
    out_path = sys.argv[2]
    try:
        import pypdf
    except ImportError:
        print("Installing pypdf...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf", "--quiet"])
        import pypdf

    reader = pypdf.PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        extracted = page.extract_text()
        if extracted:
            text += extracted + "\n"

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"Extracted to {out_path}")

if __name__ == "__main__":
    extract_pdf()
