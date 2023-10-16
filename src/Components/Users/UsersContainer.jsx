import React, { useEffect, useState, useCallback } from "react";
import instance from "../../Axios/axios";
import LoadingComponent from "../Loading/Loading";
import PaginationComponent from "./Paginator/PaginationComponent";

import style from './UsersContainer.module.css'
import User from "./User/User";
import { fetchGetAllUsers } from "../../redux/slices/allUsersSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";





///useSearchParams - хук чтобы получить query parametr из строки



const UsersContainer = () => {
    const navigate = useNavigate()


    const dispatch = useDispatch()
    const [data, setData] = useState(null)
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [rowPerPage] = useState(5);
    const [allUsersCount, setAllUsersCount] = useState(null)

    const getTotalPageCount = (rowCount) =>
        Math.ceil(rowCount / rowPerPage);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null)
            try {
                // const {payload} = await dispatch(fetchGetAllUsers());
                const { data } = await instance.get(`/users?page=${page}&limit=${rowPerPage}`);
                const { users, usersTotalCount } = data;
                setAllUsersCount(usersTotalCount)
                setData(users)
            } catch (error) {
                setError(
                    error instanceof Error ? error.message : 'Unknown Error'
                );
                setData(null);
            } finally {
                navigate(`/users?page=${page}&limit=${rowPerPage}`)
                setLoading(false);
            }
        };
        fetchData()
    }, [page]);


    const handleNextPageClick = useCallback(() => {
        setPage(page < getTotalPageCount(allUsersCount) ? (prev) => prev + 1 : page)
    }, [page, data]);

    // const current = page;
    // const next = current + 1;
    // const total = data ? getTotalPageCount(data.length) : current;
    // setPage(next <= total ? next : current);

    const handlePrevPageClick = useCallback(() => {
        setPage(page > 1 ? (prev) => prev - 1 : 1)
    }, [page]);

    // const current = page;
    // const prev = current - 1;
    // setPage(prev > 0 ? prev : current);



    return (
        <div className={style.users_wrapper}>
            {
                isLoading ?
                    <LoadingComponent /> :
                    <div className={style.users_container}>
                        <div><PaginationComponent nextPage={handleNextPageClick} prevPage={handlePrevPageClick} /></div>
                        <div className={style.users_items}>{data ? data.map((elem) => { return <User data={elem} /> }) : null}</div>

                    </div>
            }
        </div>
    )
}


export default UsersContainer;