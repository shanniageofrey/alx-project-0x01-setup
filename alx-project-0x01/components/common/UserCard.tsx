import { UserProps } from "@/interfaces";

export const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company}) => {

    return (
       <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hober:shadow-xl transition-shadow duration-300">
       
        <div className="flex flex-col ">
            <p className="self-end text-blue-500">{username}</p>
            <p>name:{name}</p>
            <h3>Works</h3>
             <p>Company name: {company.name}</p>
             <p>{company.catchPhrase}</p>
             <p>{company.bs}</p>
             <div>
                <h5>Contact</h5>
                <div className="flex flex-wrap  gap-4">
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{website}</p>
                </div>
                <div className="self-center flex gap-1 items-center">
                    <p>{address.street}</p>
                    <p>{address.suite}</p>
                    <p>{address.city}</p>
                    <p>{address.zipcode}</p>
                    <p>{address.geo.lat} | {address.geo.lng}</p>
                </div>
             </div>
        </div>
       </div>
    )
}

export default UserCard;