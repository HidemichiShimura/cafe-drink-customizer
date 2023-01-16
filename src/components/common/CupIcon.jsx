const CupIcon = ({src, alt}) => (
        <img
            src={src}
            alt={alt}
        />
);

const CupIconContainer = ({food}) => {
    const src = food === "" ? "icons/cup.png": `icons/cup-${food}.png`;
    const alt = food === "" ? "cup icon" : `${food} cup icon`;

    return (
        <CupIcon
            src={src}
            alt={alt}
        />
    );
};

export default CupIconContainer;