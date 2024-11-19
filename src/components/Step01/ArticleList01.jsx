import Article01 from "./Article01";

function ArticleList01(props) {
    return (
        <div>
            <div class="card">
                <div class="card__header">강의 목록</div>
                <div class="card__body">
                    <div class="courses">
                        <Article01 />
                        <Article01 />
                        <Article01 />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ArticleList01;