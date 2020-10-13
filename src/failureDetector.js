import React from "react";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Amplify, { PubSub } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';
import AWSConfiguration from './pubSub-config.js';


// Apply plugin with configuration
Amplify.addPluggable(new AWSIoTProvider({
    aws_pubsub_region: AWSConfiguration.aws_pubsub_region,
    aws_pubsub_endpoint: AWSConfiguration.aws_pubsub_endpoint
}));


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function FailureDetector() {
    const [open, setOpen] = React.useState(false);
    const vertical = "bottom";
    const horizontal = "right";
    let text = "Device 1 disconnected"; // for PoW

    // to modify topic
    PubSub.subscribe('aws/events/presence/disconnected').subscribe({
        next: data => {
            setOpen(true);
            // get device id
            text = data;
        },
        error: error => console.error(error),
        close: () => console.log('Done'),
    });

    return (
        <>
            <Snackbar open={open} anchorOrigin={{ vertical, horizontal }}>
                <Alert severity="error" action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }>
                    <Typography>
                        { text }
                    </Typography>
                </Alert>
            </Snackbar>
        </>
    )
}