import React, { useEffect } from "react";
import { fetchGetAllUsers } from "../../redux/slices/allUsersSlice";
import { useDispatch, useSelector } from "react-redux";

const Users = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetAllUsers())
    }, [])

    const { data } = useSelector((state) => state.users)
    debugger
    return (
        <div>
            {data ? data.map((val) => {
                return <p>{val.userName}</p>
            }) : null}
        </div>
    )
}

export default Users;