export interface PostProps {
    userId: number;
    id: number;
    title: number;
    body: string;
}

export interface PostPageProps {
    posts: PostProps[];
}

export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export interface UserPageProps {
    posts: UserProps[];
}

export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
}

export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
}

export interface UserData {
    id?: number;
    name: string;
    userName: string;
    email: string;
    phone: string;
    website: string;
}

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserData) => void;
}