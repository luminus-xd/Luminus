type LinkProps = {
  url: string;
  label: string;
  external?: boolean;
};

/**
 *
 * @param url a要素のhref属性
 * @param label a要素のラベル
 * @param external 外部リンクかどうか
 * @returns
 */
const LinkElement: React.FC<LinkProps> = (data) => {
  return (
    <a
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      href={data.url}
      target={data.external ? "_blank" : ""}
      rel={data.external ? "noopener noreferrer" : ""}
    >
      {data.label}
    </a>
  );
};

export default LinkElement;
