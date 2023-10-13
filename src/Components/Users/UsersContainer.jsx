import React, { useEffect, useState, useCallback } from "react";
import instance from "../../Axios/axios";
import LoadingComponent from "../Loading/Loading";
import PaginationComponent from "./Paginator/PaginationComponent";

import style from './UsersContainer.module.css'
import User from "./User/User";
import { fetchGetAllUsers } from "../../redux/slices/allUsersSlice";
import { useDispatch } from "react-redux";









const UsersContainer = () => {

const dispatch = useDispatch()
    const [data, setData] = useState(null)
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [rowPerPage] = useState(5);

    const getTotalPageCount = (rowCount) =>
        Math.ceil(rowCount / rowPerPage);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null)
            try {
                const {payload} = await dispatch(fetchGetAllUsers());
                debugger
                setData(payload)
            } catch (error) {
                setError(
                    error instanceof Error ? error.message : 'Unknown Error'
                );
                setData(null);
            } finally {
                setLoading(false);
            }
        };
        fetchData()
    }, [page]);


    const handleNextPageClick = useCallback(() => {
        const current = page;
        const next = current + 1;
        const total = data ? getTotalPageCount(data.length) : current;
        setPage(next <= total ? next : current);
    }, [page, data]);



    const handlePrevPageClick = useCallback(() => {
        const current = page;
        const prev = current - 1;
        setPage(prev > 0 ? prev : current);
    }, [page]);





    return (
        <div className={style.users_wrapper}>
            {
                isLoading ?
                    <LoadingComponent /> :
                    <div className={style.users_container}>
                        <div><PaginationComponent /></div>
                        <div className={style.users_items}>{ data ? data.map((elem)=>{return <User data={elem}/> }) : null}</div>
                        
                    </div>
            }
        </div>
    )
}


export default UsersContainer;