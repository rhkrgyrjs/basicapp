export default function MyListItem({title, imgUrl, content}) 
{
    let cnt = 0;
    const handleClick = () =>
    {
        cnt = cnt + 1;
        console.log(cnt);
    }

    return (
        <div className="flex w-full h-full justify-center items-start p-2 border border-slate-400">
        <div className="flex w-1/3 m-2">
            {/* 이미지 */}
            <img src={imgUrl} alt={title} />
        </div>
        <div className="flex w-2/3 h-full flex-col justify-between p-2 m-2">
            {/* 콘텐츠(제목+본문, 좋아요) */}
            <div>
                {/* 제목+본문 */}
                <h1 className="text-xl font-bold">{title}</h1>
                <p>{content}</p>
            </div>
            <div className="flex justify-end items-center" onClick={handleClick}>
                {/* 좋아요 */}
                <span>❤️</span>
                <span className="inline-flex mx-2 font-bold">좋아요</span>
                <span className="font-bold text-xl">{cnt}</span>
            </div>
        </div>
        </div>
    )
}
