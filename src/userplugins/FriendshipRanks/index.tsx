import { BadgeUserArgs, ProfileBadge } from "@api/Badges";
import ErrorBoundary from "@components/ErrorBoundary";
import { Devs } from "@utils/constants";
import { Margins } from "@utils/margins";
import { ModalSize, Modals, openModal } from "@utils/modal";
import definePlugin from "@utils/types";
import { Flex, Forms, RelationshipStore } from "@webpack/common";

interface rankInfo {
    title: string;
    description: string;
    requirement: number;
    assetURL: string;
}

function daysSince(dateString: string): number {
    const date = new Date(dateString);
    const currentDate = new Date();

    const differenceInMs = currentDate.getTime() - date.getTime();

    const days = differenceInMs / (1000 * 60 * 60 * 24);

    return Math.floor(days);
}

let ranks: rankInfo[] =
    [
        {
            title: "Sprout",
            description: "Your friendship is just starting",
            requirement: 0,
            assetURL: "https://shirokazane.github.io/Tokyo-Night/assets/sprout.png"
        },
        {
            title: "Blooming",
            description: "Your friendship is getting there! (1 Month)",
            requirement: 30,
            assetURL: "https://shirokazane.github.io/Tokyo-Night/assets/blooming.png"
        },
        {
            title: "Burning",
            description: "Your friendship has reached terminal velocity :o (3 Months)",
            requirement: 90,
            assetURL: "https://shirokazane.github.io/Tokyo-Night/assets/burning.png"
        },
        {
            title: "Star",
            description: "Your friendship has been going on for a WHILE (1 Year)",
            requirement: 365,
            assetURL: "https://shirokazane.github.io/Tokyo-Night/assets/star.png"
        },
        {
            title: "Royal",
            description: "Your friendship has gone through thick and thin- a whole 2 years!",
            requirement: 730,
            assetURL: "https://shirokazane.github.io/Tokyo-Night/assets/royal.png"
        },
        {
            title: "Besties",
            description: "How do you even manage this??? (5 Years)",
            assetURL: "https://shirokazane.github.io/Tokyo-Night/assets/besties.png",
            requirement: 1826.25
        }
    ];

function openRankModal(rank: rankInfo) {
    openModal(props => (
        <ErrorBoundary>
            <Modals.ModalRoot {...props} size={ModalSize.DYNAMIC}>
                <Modals.ModalHeader>
                    <Flex style={{ width: "100%", justifyContent: "center" }}>
                        <Forms.FormTitle
                            tag="h2"
                            style={{
                                width: "100%",
                                textAlign: "center",
                                margin: 0
                            }}
                        >
                            Your friendship rank
                        </Forms.FormTitle>
                    </Flex>
                </Modals.ModalHeader>
                <Modals.ModalContent>
                    <div style={{ padding: "1em", textAlign: "center" }}>
                        <Forms.FormText className={Margins.bottom20}>
                            {rank.title}
                        </Forms.FormText>
                        <img src={rank.assetURL} style={{ height: "150px" }} />
                        <Forms.FormText className={Margins.top16}>
                            {rank.description}
                        </Forms.FormText>
                    </div>
                </Modals.ModalContent>
            </Modals.ModalRoot>
        </ErrorBoundary >
    ));
}

function getBadgesToApply() {

    let badgesToApply: ProfileBadge[] = ranks.map((rank, index, self) => {
        return (
            {
                description: rank.title,
                image: rank.assetURL,
                props: {
                    style: {
                        transform: "scale(0.8)"
                    }
                },
                shouldShow: (info: BadgeUserArgs) => {
                    if (!RelationshipStore.isFriend(info.userId)) { return false; }

                    let days = daysSince(RelationshipStore.getSince(info.userId));

                    if (self[index + 1] == null) {
                        return days > rank.requirement;
                    }

                    return (days > rank.requirement && days < self[index + 1].requirement);
                },
                onClick: () => openRankModal(rank)
            });
    });
    return badgesToApply;
}

export default definePlugin({
    name: "FriendshipRanks",
    description: "Adds badges showcasing how long you have been friends with a user for",
    authors: [
        Devs.Samwich,
        Devs.Shiro
    ],
    start() {
        getBadgesToApply().forEach((thing) => Vencord.Api.Badges.addBadge(thing));

    },
    stop() {
        getBadgesToApply().forEach((thing) => Vencord.Api.Badges.removeBadge(thing));
    },
});