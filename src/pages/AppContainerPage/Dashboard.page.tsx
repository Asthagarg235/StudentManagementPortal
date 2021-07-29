import { useState } from "react";
import { useEffect } from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../../api";
import Cards from "../../components/CardComponent/Cards";
import Input from "../../components/Input/Input";
import Navbar from "../../components/Navbar";
interface Props{
}
const Dashboard: React.FC<Props> = (props) => {
  const [query, setQuery] = useState<string>();
  const [user, setUser] = useState<any>([]);
  useEffect(() => {
    fetchGroups({
      status: "all-groups",
      query: query,
    }).then((response) => {
      console.log(response);
      setUser(response);
    });
  }, [query]);

  const search = (val: any) => {
    val = val.currentTarget.value;
    setQuery(val);
  };

  return (
    <div>
      <Navbar />
      <div>
        <Link to="/recordings"><span className = "text-blue-500">Go to recordings</span></Link>
      </div>
        <div className="flex flex-row justify-end mt-5 justifyContent: flex-end ml-5" style={{flexDirection: 'row'}}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-2 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
          <Input
            id="Search"
            type="search"
            autoComplete="search"
            required
            placeholder="search..."
            onChange={search}
          />
        </div>
        <div>
        {user.map((u: any) => (
        <Cards
          Name = {u.name}
          description={u.description}
          imageLink={u.group_image_url}
          firstname={u.creator.first_name}
          lastname={u.creator.last_name}
        ></Cards>
      ))}
        </div>
    </div>
);
};

Dashboard.defaultProps = {
}

export default memo(Dashboard);