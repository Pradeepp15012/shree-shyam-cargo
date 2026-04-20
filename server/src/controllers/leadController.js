import { validationResult } from 'express-validator';
import Lead from '../models/Lead.js';

function validationErrorResponse(req, res) {
  const errors = validationResult(req);

  if (errors.isEmpty()) return null;

  return res.status(400).json({
    message: 'Validation failed.',
    errors: errors.array()
  });
}

export async function createLead(req, res) {
  const errorResponse = validationErrorResponse(req, res);
  if (errorResponse) return errorResponse;

  const lead = await Lead.create(req.body);

  return res.status(201).json({
    message: 'Lead created successfully.',
    lead
  });
}

export async function getLeads(_req, res) {
  const leads = await Lead.find().sort({ createdAt: -1 });
  return res.json({ leads });
}

export async function updateLead(req, res) {
  const errorResponse = validationErrorResponse(req, res);
  if (errorResponse) return errorResponse;

  const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!lead) {
    return res.status(404).json({ message: 'Lead not found.' });
  }

  return res.json({
    message: 'Lead updated successfully.',
    lead
  });
}

export async function deleteLead(req, res) {
  const lead = await Lead.findByIdAndDelete(req.params.id);

  if (!lead) {
    return res.status(404).json({ message: 'Lead not found.' });
  }

  return res.json({ message: 'Lead deleted successfully.' });
}

