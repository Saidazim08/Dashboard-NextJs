import styled from "styled-components";

const padding = "20px";

const ContainerWrapper = styled.div`
    display: flex;

    .sidebar{
        width: 0px;
        flex-shrink: 0;
        padding: ${padding} 0;
        background-color: #123;
        height: 100vh;
        min-height: 500px;
        color: white !important;
        position: sticky;
        top: 0;
        overflow: hidden;
        transition: 0.3s;

        &.show{
            width: 300px;
            padding: ${padding};
        }

        a{
            color:white!important;
        }
        .MuiListItemIcon-root{
            color:white!important;
        }
    }

    .rightside{
        flex:1;

        header{
            background-color: white;
            position: sticky;
            top: 0;
            z-index:1000;
        }
        .content{
            padding: ${padding}
        }
    }
`;

export default ContainerWrapper;