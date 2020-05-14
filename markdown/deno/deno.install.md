# インストール

## macOS

~~~bash
$ brew install deno
==> Downloading https://homebrew.bintray.com/bottles/deno-1.0.0.catalina.bottle.tar.gz
==> Downloading from https://akamai.bintray.com/2f/2f62bf608b68189eaf3ded4dd3204ee9ce32053c18f8f9f5a1e16e792cdc7d18?__gda__=exp=1589498957~hmac=abc5c285
==> Pouring deno-1.0.0.catalina.bottle.tar.gz
==> Caveats
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d

zsh completions have been installed to:
  /usr/local/share/zsh/site-functions
==> Summary
🍺  /usr/local/Cellar/deno/1.0.0: 9 files, 41.7MB

~~~

## Linux(ubuntu)

~~~bash
$ curl -fsSL https://deno.land/x/install/install.sh | sh
...
Archive:  /home/vagrant/.deno/bin/deno.zip
  inflating: deno                    
Deno was installed successfully to /home/vagrant/.deno/bin/deno
Manually add the directory to your $HOME/.bash_profile (or similar)
  export DENO_INSTALL="/home/vagrant/.deno"
  export PATH="$DENO_INSTALL/bin:$PATH"
Run '/home/vagrant/.deno/bin/deno --help' to get started
~~~
