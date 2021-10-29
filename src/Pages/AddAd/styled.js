import styled from "styled-components";

export const PageArea = styled.div `

form {
    background-color: white;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0 0 3px #eee;

    .area {
        display: flex;
        align-items: center;
        padding: 10px;
        max-width: 500px;
        
        .checkbox {
            width: auto !important;
        }

        .area-title {
            width: 200px;
            text-align: right;
            padding-right: 20px;
            font-weight: bold;
            font-size: 14px;
        }
        .area-input {
            flex: 1;

            .checkbox {
                float: left;
            }

            input, select, textarea {
                width: 100%;
                font-size: 14px;
                padding: 5px;
                border: 1px solid #ddd;
                border-radius: 3px;
                outline: 0;
                transition: 0.4s;

                &:focus {
                    border: 1px solid #888;
                    color: #333;
                }
            }

            textarea {
                height: 150px;
                resize: none;
            }

            button {
                background-color: #0089FF;
                border: 0;
                outline: 0;
                padding: 5px 10px;
                border-radius: 4px;
                color: white;
                font-size: 15px;
                cursor: pointer;

                &:hover {
                    background-color: #006FCE;
                }
            }
        }

    }
}

`;