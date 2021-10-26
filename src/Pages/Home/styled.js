import styled from "styled-components";

export const PageArea = styled.div `

h2 {
    font-size: 20px;
}

.list {
    display: flex;
    flex-wrap: wrap;
    
    .aditem {
        width: 25%;
    }
}

.seeAllLink {
    color: black;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
}

`;

export const SearchArea = styled.div`
    background-color: #DDD;
    border-bottom: 1px solid #CCC;
    padding: 20px 0;

    .searchBox {
        background-color: #9BB83C;
        padding: 20px 15px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0.3px rgba(0,0,0,0.2);
        display: flex;

        form {
            display: flex;
            flex: 1;
            
            input, select {
                height: 40px;
                border: 0;
                border-radius: 5px;
                outline: 0;
                font-size: 15px;
                color: black;
                margin-right: 20px;
            }

            input {
                flex: 1;
                padding: 0 10px;
            }

            select {
                width: 100px;
            }

            button {
                background-color: #49AEEF;
                font-size: 15px;
                border: 0;
                border-radius: 5px;
                color: white;
                height: 40px;
                padding: 0 20px;
                cursor: pointer;
                transition: .2s;
                &:hover {
                    background-color: #3B93CC;
                }
            }
        }

    }

    .categoryList {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;

        .categoryItem {
            width: 25%;
            display: flex;
            align-items: center;
            color: black;
            text-decoration: none;
            height: 50px;
            margin-bottom: 10px;

            &:hover {
                color: #999;
            }

            img {
                width: 45px;
                height: 45px;
                margin-right: 10px;

            }
        }
    
    }


`;

