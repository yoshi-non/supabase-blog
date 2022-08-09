# Supabaseチュートリアル 簡易ブログ

![supabase-blog](https://user-images.githubusercontent.com/83369665/183567899-05d547f9-208c-4312-8c54-67969c16593b.png)

## Supabaseのサイト

URL: [https://supabase.com/](https://supabase.com/)

## Supabaseのインストール
yarn add @supabase/supabase-js

## サーバ起動
yarn dev

## Supabaseのデータカラム

![supabase](https://user-images.githubusercontent.com/83369665/183470547-126aca6e-3f93-4a95-bcfb-219b952941d2.png)

作成したプロジェクトの設定からProject URLのURLとProject API keysのKEYを
utilというフォルダのclient.tsというファイルのNEXT_PUBLIC_SUPABASE_URLとNEXT_PUBLIC_SUPABASE_KEYにそれぞれ割り当てる。

中身は.env.localに記載しgitignoreする。

## データベースのテーブル確認

![supabase-table](https://user-images.githubusercontent.com/83369665/183568422-8d4cb8b4-06cc-4e45-a98c-2c690cbb036d.png)