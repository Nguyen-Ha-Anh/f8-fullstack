import {Dialog, DialogContent, DialogTitle} from "@mui/material";

export default function ({isOpen, setIsOpen}) {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <span>r u sure?</span>
      </DialogContent>
    </Dialog>
  )
}