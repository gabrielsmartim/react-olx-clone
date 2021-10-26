import styled from "styled-components";

export const HeaderArea = styled.div`
    background-color: #fff;
    height: 60px;
    border-bottom: 1px solid #ccc;

    .container {
        max-width: 1000px;
        margin: auto;
        display: flex;
    }
    a {
        text-decoration: none;
    }
    .logo {
        flex: 1;
        display: flex;
        align-items: center;
        height: 60px;

        .logo-1, .logo-2, .logo-3 {
            font-size: 27px;
            font-weight: bold;
        }
        .logo-1 {color: #6E0AD6;}
        .logo-2 {color: #8CE563;}
        .logo-3 {color: #F28000;}
    }
    nav {
        padding-top: 10px;
        padding-bottom: 10px;
        
        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        ul {
            display: flex;
            align-items: center;
            height: 40px;
        }
        li {
            margin: 0 20px;
            
            a ,button{
                outline: none;
                cursor: pointer;
                border: 0;
                background: none;
                color: black;
                font-size: 14px;
                text-decoration: none;
                transition: 0.4s;

                &:hover {
                    color: #888; 
                }

                &.button {
                    background-color: #6E0AD6;
                    border-radius: 4px;
                    color: white;
                    padding: 10px;

                    &:hover {
                        background-color: #5000A3;
                    }
                }
            }

        }
    }
`;