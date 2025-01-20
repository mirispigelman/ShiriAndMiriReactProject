
import { useContext} from "react";
import { ContextUser } from "../ContextUser";
import '../../App.css'

const ShowInfo=()=>{
    const {user}=useContext(ContextUser);

    return(
        <div>
              {Object.entries(user).map(([key, value]) => {
                if (key === "website") return null;
                return (
                    <ul key={key}>
                        <strong>{key}:</strong>
                        {typeof value === 'object' ? (
                            <ul>
                                {Object.entries(value).map(([subKey, subValue]) => (
                                    <li key={[key, subKey]}>
                                        {subKey === "geo" && typeof subValue === "object" ? (
                                            <>
                                                <strong>{subKey}:</strong> {subValue.lat}, {subValue.lng}
                                            </>
                                        ) : (
                                            <>
                                                <strong>{subKey}:</strong> {String(subValue)}
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <>{String(value)} </>
                        )}
                    </ul>
                );
            })}
        </div>
    )
}
export default ShowInfo;