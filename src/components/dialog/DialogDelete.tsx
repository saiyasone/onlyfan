import { useMutation } from "@apollo/client";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { MUTATION_UPDATE_FOLDER } from "api/graphql/folder.graphql";
import { successMessage } from "utils/alert.util";

// mutation

export const DialogDelete = ({ title, onClose, open, id, refecthFolder }) => {
  const [deleteFolder, { loading: reloading, error: deleteError }] =
    useMutation(MUTATION_UPDATE_FOLDER);

  const handleDeleteFolder = async () => {
    if (reloading) return;
    if (deleteError) return;

    const removeFolder = await deleteFolder({
      variables: {
        where: { _id: id },
        data: {
          status: "deleted",
        },
      },
    });
    if (removeFolder) {
      onClose();
      successMessage("Delete folder success !", 3000);
      refecthFolder();
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ mt: 2 }}>
          {"Do you want delete"}&nbsp;
          <span style={{ fontWeight: "bold" }}>{title}?</span>
        </DialogTitle>

        <DialogActions sx={{ mb: 2 }}>
          <Button
            sx={{
              borderRadius: "20px",
              padding: "8px 15px",
              textTransform: "capitalize",
            }}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              borderRadius: "20px",
              padding: "8px 15px",
              textTransform: "capitalize",
            }}
            onClick={handleDeleteFolder}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
