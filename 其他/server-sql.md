```sql
drop table if exists xxx;
```

```sql
alter table xxx add partition(pt='xxx')
```

```sql
alter table xxx add columns (xxx  string 	comment 'xxx')
```

```sql
alter table xxx change column xxx xxx	 int comment 'xxx'
```

```sql
unlock table xxx partition(pt='${bizday}')
```

```sql
alter table xxx drop column xxx
```

```sql
create table if not exists hzdi.ods_h5_error_global_pv_and_error_di
(
     xxx    string              comment 'xxx'
) comment 'xxx'
partitioned by(pt string comment 'xxx')
clustered by(xxx) into 32 buckets
row format delimited
    collection items terminated by ','
  	map keys terminated by ':'
stored as orcfile;
```

```sql
select
    *
from
    xxx
where
    xxx
group by xxx
```

```sql
insert overwrite table xxx partition(pt='xxx')
```