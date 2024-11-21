const StreamItem = (stream) => {
    return (
        <p key={stream} className="text-sm text-purple-400">
            {stream}
        </p>
    );
};

export default StreamItem;
