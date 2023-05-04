import React, { useState } from "react";

function TwitterFollowCard({ children, userName, initialIsFollowing }) {
    const [ isFollowing, setIsFollowing ] = useState(initialIsFollowing);
    const btnClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img src={`https://unavatar.io/${userName}`} alt="avatar" className="tw-followCard-avatar"/>
                <div className="tw-followCard-info">
                    <strong>{ children }</strong>
                    <span className="tw-followCard-infoUserName">@{ userName }</span>
                </div>
            </header>

            <aside>
                <button className={btnClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{ isFollowing ? "Siguiendo" : "Seguir" }</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}

export default TwitterFollowCard;