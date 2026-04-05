import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'


function CustomerLoading({loading}:{loading:boolean}) {
  return (
   <AlertDialog open ={loading}>
 <AlertDialogTitle>Generating Video Script...</AlertDialogTitle>
  <AlertDialogContent className='bg-white'>
          <div className='bg-white'>
            <h2>Loading...</h2>
          </div>
  </AlertDialogContent>
</AlertDialog>
  )
}

export default CustomerLoading
