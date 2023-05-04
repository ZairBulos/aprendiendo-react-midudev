import React from "react";
import { users } from "../mocks/users.json";
import TwitterFollowCard from "./TwitterFollowCard";

function User() {
    return(
        <section className="App">
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard key={ userName }
                      userName={ userName }
                      initialIsFollowing={ isFollowing }
                    >
                      { name }
                    </TwitterFollowCard>
                ))
            }
        </section>
    );
}

export default User;