import * as Reast from 'react'
import {List , Datagrid, TextField, ReferenceField, EditButton
,SimpleForm,Edit,ReferenceInput,SelectInput,TextInput
,Create,Filter,SimpleList} from 'react-admin'

import {useMediaQuery} from '@material-ui/core'

const PostTitl =({ record}) => {
    return <span>Post {record ?`"${record.title}"` : ""}</span>;
}

const PostFilter = (props) =>(
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="UserId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
)

export const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'))

    return (
        <List filters={<PostFilter/>} {...props}>
        {isSmall ? (
            <SimpleList
                primaryText={record => record.title}
                secondaryText={record=> `${record.views}views`}
                tertiaryText={record=> new Date(record.published_at).toLocaleDateString()}
            />
        ) : (
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <ReferenceField source="userId" reference="users">
                <TextField source="name" />
                </ReferenceField>
                <TextField source="title" />
                <TextField source="body" />
                <EditButton />
            </Datagrid>
        )}
        </List> 
)}

export const PostEdit = props => (
    <Edit title={<PostTitl/>} {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
)

export const PostCreate = props =>(
    <Create {...props} >
        <SimpleForm>
        <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
)