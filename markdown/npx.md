# npx

- https://github.com/npm/npm/releases/tag/v5.2.0
- [Introducing npx: an npm package runner – Kat Marchán – Medium](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

~~~bash
$ which npx
/Users/hide/.anyenv/envs/ndenv/shims/npx
~~~

~~~bash
$ npx --help
npmパッケージのバイナリを実行します。
  npx [オプション] <コマンド>[@バージョン] [コマンドの引数]...

  npx [オプション] [-p|--package <パッケージ>]... <コマンド> [コマンドの引数]...

  npx [オプション] -c '<コマンドの文字列>'

  npx --shell-auto-fallback [シェル]


オプション:
  --package, -p          インストールするパッケージ。                   [文字列]
  --cache                npmのキャッシュへのパス。                      [文字列]
  --always-spawn         Always spawn a child process to execute the command.
                                                                          [真偽]
  --no-install           パッケージがない場合は、インストールをスキップします。
                                                                          [真偽]
  --userconfig           ユーザーのnpmrcへのパス。                      [文字列]
  --call, -c             「npm
                         run-script」の内部にあるかのように文字列を実行します。
                                                                        [文字列]
  --shell, -s            コマンドを実行するシェル（存在する場合）。
                                                    [文字列] [デフォルト: false]
  --shell-auto-fallback  "コマンドが見つかりません"
                         フォールバックとして使用するコードを生成します。
                          [文字列] [選択してください: "", "bash", "fish", "zsh"]
  --ignore-existing      $PATH、または既存のローカルプロジェクトのバイナリを無視します。
                         これにより、npxは一時的にインストールを行い、最新バージョンを使用します。
                                                                          [真偽]
  --quiet, -q            npx自体の標準出力を抑止します。
                         サブコマンドは影響を受けません。                 [真偽]
  --npm                  npmのバイナリを内部操作に使用します。
                                                           [文字列] [デフォルト:
  "/Users/hide/.anyenv/envs/ndenv/versions/v10.0.0/lib/node_modules/npm/bin/npm-
                                                                        cli.js"]
  --node-arg, -n         Extra node argument when calling a node binary.[文字列]
  --version, -v          バージョンを表示                                 [真偽]
  --help, -h             ヘルプを表示                                     [真偽]

詳しくは、npx(1)のマニュアルページを参照してください。
~~~

## 記事

- [npxが結構良さそうな件について - Qiita](https://qiita.com/vvakame/items/23b02e950ca307b9e674)
- [npxでローカルパッケージを実行できるんです！ | 株式会社CONFRAGE ITソリューション事業部](https://confrage.jp/npx%E3%81%A7%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%93%E3%81%A7%E3%81%99%EF%BC%81/)
