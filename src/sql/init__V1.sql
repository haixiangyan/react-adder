create table record
(
    id        int auto_increment
        primary key,
    first     int default 0 null,
    second    int default 0 null,
    result    int default 0 null,
    createdAt datetime      null
)
    comment '计算结果的记录';

