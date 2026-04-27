type PixelAvatarProps = {
  src: string;
  alt: string;
  size?: number;
};

export function PixelAvatar({ src, alt, size = 96 }: PixelAvatarProps) {
  return (
    <div className="group relative inline-block" style={{ width: size, height: size }}>
      <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-md bg-accent transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="relative h-full w-full rounded-md border-2 border-fg bg-bg object-cover"
      />
    </div>
  );
}
