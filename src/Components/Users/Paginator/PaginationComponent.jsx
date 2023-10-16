import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

import style from './../UsersContainer.module.css'

function PaginationComponent({nextPage,prevPage}) {
    return (
        <Pagination className={style.users_paginator}>
            {/* <Pagination.First /> */}
            <Pagination.Prev onClick={prevPage} />
            {/* <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item> */}
            <Pagination.Next onClick={nextPage} />
            {/* <Pagination.Last /> */}
        </Pagination>
    );
}

export default PaginationComponent;