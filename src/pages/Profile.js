import {useParams} from "react-router-dom";

const data = {
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자',
    },
    sena: {
        name: '임세나',
        description: '리액트 신이 되고 싶은 개발자',
    },
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    );
};

export default Profile;