from pathlib import Path
from shutil import move

p = Path("./src/components")


def re(p):
    for i in p.iterdir():
        if i.is_dir() and str(i) != str(p):
            print(i)
            re(i)
        elif str(i).endswith(".ts"):
            move(str(i), str(i).replace(".ts", ".tsx"))
        else:
            pass


re(p)
