import { SlPlus } from "react-icons/sl";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function HeaderSection({ handleShow }) {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1>blog</h1>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Button size="sm" variant="primary" onClick={handleShow}>
            Create
            <SlPlus />
          </Button>
        </div>
      </div>
    </>
  );
}
