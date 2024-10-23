import styled from "styled-components"

const ToDoListStyle = styled.div`
    .input-group{
        display: flex;
        border: 1px solid #ccc;
        height: 40px;
        input {
            flex: 1;
            padding: 0 10px;
            outline: none;
        }
        button{
            padding: 0 10px;
            background: #ccc;
            &:disabled{
                opacity: 0.2;
            }
        }
    }

    .list-board{
        display: flex;
        gap: 30px;
        .board{
            flex: 1;
            .title{
            font-size: 30px;
            margin: 20px 0 20px 0;
            font-weight: bold;
        }
        }
    }
`

export const ToDoList = () => {
    return (
        <ToDoListStyle>
            <div className="input-group">
                <input type="text" placeholder="công việc...." />
                <button disabled>them</button>
            </div>
            <div className="list-board">
                <div className="board">
                    <div className="title">Công việc đang làm</div>
                    <div className="items">
                        <ToDoItem />
                    </div>
                </div>
                <div className="board">
                    <div className="title">Công việc đã hoàn thành</div>
                    <div className="items">
                        <ToDoItem />
                    </div>
                </div>
            </div>
        </ToDoListStyle>
    )
}

const ToDoItemStyle = styled.div`
    display: flex;
    border: 1px solid #ccc;
    .name {
        flex: 1;        
    }
    button {
        border: 1px solid #ccc;
        padding: 0 10px;
        background: #ccc;
    }
    &.isCompleted{
        background: #eee;
        button{
            display: none;
        }
        .name{
            text-decoration: line-through;
        }
    }
`

const ToDoItem = () => {
    return (
        <ToDoItemStyle>
            <div className="name">Công việc A</div>
            <button>✓</button>
        </ToDoItemStyle>
    )
}