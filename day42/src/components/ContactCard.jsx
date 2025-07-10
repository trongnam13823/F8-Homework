import { Card, CardContent, Typography, CardActions, Button, Avatar } from "@mui/material";

export default function ContactCard({ contact, onEdit, onDelete }) {
    return (
        <Card>
            <CardContent>
                <Avatar src={contact.avatar} sx={{ width: 60, height: 60, mb: 1 }} />
                <Typography variant="h6">
                    {contact.firstName} {contact.lastName}
                </Typography>
                <Typography>{contact.email}</Typography>
                <Typography>{contact.phone}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => onEdit(contact)}>Edit</Button>
                <Button onClick={() => onDelete(contact.id)} color="error">
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}
