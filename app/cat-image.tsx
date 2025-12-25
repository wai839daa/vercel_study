// 画像情報の型定義
type CatImageProps = {
  url: string;
};


// 画像を表示するコンポーネント
export function CatImage({ url }: CatImageProps) {
  return (
    <div>
      <img src={url} />
    </div>
  );
}

