"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const event_service_1 = __importDefault(require("./event.service"));
const createEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const event = yield event_service_1.default.createEvent(data);
        return res.status(201).json({ success: true, message: 'Event created successfully', data: event });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return res.status(500).json({ success: false, message: errorMessage });
    }
});
const getAllEvents = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield event_service_1.default.getAllEvents();
        return res.status(200).json({ success: true, message: 'Events fetched successfully', data: events });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return res.status(500).json({ success: false, message: errorMessage });
    }
});
const getEventById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const event = yield event_service_1.default.getEventById(id);
        if (!event) {
            return res.status(404).json({ success: false, message: 'Event not found' });
        }
        return res.status(200).json({ success: true, message: 'Event fetched successfully', data: event });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return res.status(500).json({ success: false, message: errorMessage });
    }
});
const updateEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    try {
        const updatedEvent = yield event_service_1.default.updateEvent(id, data);
        return res.status(200).json({ success: true, message: 'Event updated successfully', data: updatedEvent });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return res.status(500).json({ success: false, message: errorMessage });
    }
});
const deleteEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield event_service_1.default.deleteEvent(id);
        return res.status(200).json({ success: true, message: 'Event deleted successfully' });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return res.status(500).json({ success: false, message: errorMessage });
    }
});
const EventController = {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,
};
exports.default = EventController;
