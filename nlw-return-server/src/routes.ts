import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";
import { SubmitFeedbackUseCase } from "./use-case/submit-feedback-use-case";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { NodeMailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e16be4c75bcfba",
    pass: "b186997a397fe4",
  },
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodeMailerMailAdapter = new NodeMailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodeMailerMailAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
