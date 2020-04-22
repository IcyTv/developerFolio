from pathlib import Path
from shutil import move

p = Path("./src")


def re(p):
    for i in p.iterdir():
        if i.is_dir():
            re(p)
        elif p.name.endsWith(".js"):
            move(str(p), str(p).replace(".js", ".ts"))


re(p)
