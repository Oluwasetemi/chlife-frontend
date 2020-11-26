/*eslint-disable */

import React, { useState } from "react";
import Pagination from "react-js-pagination";
import styled from "styled-components";
import MonoBlog from "../../components/blog/MonoBlog";

const Wrapper = styled.div`
  .grid-container {
    display: grid;
    justify-items: center;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
    }
    li {
      list-style-type: none;
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin: 5rem 0 4rem 0;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      padding-left: 0;
    }
  }
  .pagination li {
    list-style-type: none;
    padding: 15px 25px;
    font-family: Segoe UI;
    font-weight: normal;
    font-size: 1.7rem;
    line-height: 2.3rem;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      padding: 5px 15px;
    }
  }
  .pagination li:nth-child(3),
  .pagination li:nth-child(4),
  .pagination li:nth-child(5) {
    border-right: 1px solid ${(props) => props.theme.color.text_14};
  }
  .pagination li:nth-child(2),
  .pagination li:nth-child(6) {
    font-size: 1.3rem;
  }
  .pagination li a {
    color: ${(props) => props.theme.color.text_15};
  }
  .pagination li.active {
    background-color: ${(props) => props.theme.color.text_15};
  }
  .pagination li.active a {
    color: ${(props) => props.theme.color.text_03};
  }
`;
const PaginatedContent = () => {
  // Data to be rendered using pagination.
  const todos = [
    <MonoBlog
      title="Keeping Fit In The Age of COVID-19"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="Keeping Fit In The Age of COVID-19"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="Keeping Fit In The Age of COVID-19"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="Keeping Fit In The Age of COVID-19"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="Keeping Fit In The Age of COVID-19"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="Keeping Fit In The Age of COVID-19"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="How your Lifestyle affects your back"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="How your Lifestyle affects your back"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="How your Lifestyle affects your back"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="How your Lifestyle affects your back"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="How your Lifestyle affects your back"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="How your Lifestyle affects your back"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="How your Lifestyle affects your back"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="Keeping Fit In The Age of COVID-19"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="Keeping Fit In The Age of COVID-19"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="Keeping Fit In The Age of COVID-19"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="Keeping Fit In The Age of COVID-19"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
    <MonoBlog
      title="Keeping Fit In The Age of COVID-19"
      id="Elijah Burton"
      createdAt="27 Aug 2019"
    />,
  ];
  const todosPerPage = 6;
  const [activePage, setCurrentPage] = useState(1);

  // Logic for displaying current todos
  const indexOfLastTodo = activePage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const renderTodos = currentTodos.map((todo, index) => {
    return <li key={index}>{todo}</li>;
  });

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  return (
    <Wrapper>
      <div className="result grid-container">{renderTodos}</div>
      <div className="pagination">
        <Pagination
          activePage={activePage}
          firstPageText=""
          lastPageText=""
          prevPageText={"Previous"}
          nextPageText={"Next"}
          itemsCountPerPage={6}
          totalItemsCount={todos.length}
          pageRangeDisplayed={3}
          onChange={handlePageChange}
        />
      </div>
    </Wrapper>
  );
};

export default PaginatedContent;
