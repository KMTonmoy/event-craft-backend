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
const participant_service_1 = __importDefault(require("./participant.service"));
const createParticipation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const participation = yield participant_service_1.default.createParticipation(data);
        return res.status(201).json({ success: true, message: 'Participation request sent', data: participation });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return res.status(500).json({ success: false, message: errorMessage });
    }
});
const getAllParticipations = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const participations = yield participant_service_1.default.getAllParticipations();
        return res.status(200).json({ success: true, data: participations });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return res.status(500).json({ success: false, message: errorMessage });
    }
});
const getParticipationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const participation = yield participant_service_1.default.getParticipationById(id);
        if (!participation) {
            return res.status(404).json({ success: false, message: 'Participation not found' });
        }
        return res.status(200).json({ success: true, data: participation });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return res.status(500).json({ success: false, message: errorMessage });
    }
});
const updateParticipation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    try {
        const updated = yield participant_service_1.default.updateParticipation(id, data);
        return res.status(200).json({ success: true, message: 'Participation updated', data: updated });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return res.status(500).json({ success: false, message: errorMessage });
    }
});
const deleteParticipation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield participant_service_1.default.deleteParticipation(id);
        return res.status(200).json({ success: true, message: 'Participation deleted' });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return res.status(500).json({ success: false, message: errorMessage });
    }
});
exports.default = {
    createParticipation,
    getAllParticipations,
    getParticipationById,
    updateParticipation,
    deleteParticipation,
};
