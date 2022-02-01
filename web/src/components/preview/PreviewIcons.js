function PreviewIcons(props) {
    const blank = props.isBlank ? '_blank' : null;
    const rel = props.isBlank ? 'noreferrer' : null;
    return (
        <li
                  className={`card__socialmedia--item card__socialmedia--item${props.changePalette}`}
                >
                  <a
                    href={props.url}
                    alt={props.alt}
                    target={blank}
                    rel={rel}
                  >
                    <i
                      className={`socialmedia_icon ${props.className} socialmedia_icon${props.changePalette}`}
                    ></i>
                  </a>
                </li>
    );
}

export default PreviewIcons;