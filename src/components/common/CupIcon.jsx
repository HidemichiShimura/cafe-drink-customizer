import Image from "next/image";

const CupIcon = ({src, alt, width, height}) => (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
);

const CupIconContainer = ({food, width, height}) => {
    const src = food === "" ? "/icons/cup.png": `/icons/cup-${food}.png`;
    const alt = food === "" ? "cup icon" : `${food} cup icon`;

    return (
        <CupIcon
            src={src}
            alt={alt}
            width={width || 100}
            height={height || 100}
        />
    );
};

export default CupIconContainer;