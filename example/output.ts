describe('test test function logic', () => {
  describe('test test function logic', () => {
    const mapSpy = jest.spyOn(participants, 'map');
    const idSpy = jest.spyOn(p, 'id');

    test('updateParticipantsEmailState should call mapSpy', async () => {
      VirtualGraduationEmailSchedulerService.updateParticipantsEmailState();
      expect(mapSpy).toBeCalled();
    });

    test('updateParticipantsEmailState should call idSpy', async () => {
      VirtualGraduationEmailSchedulerService.updateParticipantsEmailState();
      expect(idSpy).toBeCalled();
    });
  });

  describe('test test function logic', () => {
    const mapSpy = jest.spyOn(participants, 'map');
    const idSpy = jest.spyOn(p, 'id');

    test('updateParticipantVGInfoState should call mapSpy', async () => {
      VirtualGraduationEmailSchedulerService.updateParticipantVGInfoState();
      expect(mapSpy).toBeCalled();
    });

    test('updateParticipantVGInfoState should call idSpy', async () => {
      VirtualGraduationEmailSchedulerService.updateParticipantVGInfoState();
      expect(idSpy).toBeCalled();
    });
  });

  describe('test test function logic', () => {
    const mapSpy = jest.spyOn(participants, 'map');
    const idSpy = jest.spyOn(p, 'id');

    test('updateParticipantsEmailRecoveryState should call mapSpy', async () => {
      VirtualGraduationEmailSchedulerService.updateParticipantsEmailRecoveryState();
      expect(mapSpy).toBeCalled();
    });

    test('updateParticipantsEmailRecoveryState should call idSpy', async () => {
      VirtualGraduationEmailSchedulerService.updateParticipantsEmailRecoveryState();
      expect(idSpy).toBeCalled();
    });
  });

  describe('test test function logic', () => {
    const findAllNotBlacklistedSpy = jest.spyOn(Participant, 'findAllNotBlacklisted');
    let lengthSpy = jest.spyOn(participants, 'length');
    const sendInvitationSpy = jest.spyOn(VirtualGraduationEmailService, 'sendInvitation');
    let lengthSpy = jest.spyOn(processedParticipants, 'length');

    test('sendInvitationsToNewParticipants should call findAllNotBlacklistedSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendInvitationsToNewParticipants();
      expect(findAllNotBlacklistedSpy).toBeCalled();
    });

    test('sendInvitationsToNewParticipants should call lengthSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendInvitationsToNewParticipants();
      expect(lengthSpy).toBeCalled();
    });

    test('sendInvitationsToNewParticipants should call sendInvitationSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendInvitationsToNewParticipants();
      expect(sendInvitationSpy).toBeCalled();
    });

    test('sendInvitationsToNewParticipants should call lengthSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendInvitationsToNewParticipants();
      expect(lengthSpy).toBeCalled();
    });
  });

  describe('test test function logic', () => {
    const findAllNotBlacklistedSpy = jest.spyOn(Participant, 'findAllNotBlacklisted');
    let lengthSpy = jest.spyOn(participants, 'length');
    const sendConfirmationSpy = jest.spyOn(VirtualGraduationEmailService, 'sendConfirmation');
    let lengthSpy = jest.spyOn(processedParticipants, 'length');

    test('sendConfirmationToParticipants should call findAllNotBlacklistedSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendConfirmationToParticipants();
      expect(findAllNotBlacklistedSpy).toBeCalled();
    });

    test('sendConfirmationToParticipants should call lengthSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendConfirmationToParticipants();
      expect(lengthSpy).toBeCalled();
    });

    test('sendConfirmationToParticipants should call sendConfirmationSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendConfirmationToParticipants();
      expect(sendConfirmationSpy).toBeCalled();
    });

    test('sendConfirmationToParticipants should call lengthSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendConfirmationToParticipants();
      expect(lengthSpy).toBeCalled();
    });
  });

  describe('test test function logic', () => {
    const findAllNotBlacklistedSpy = jest.spyOn(Participant, 'findAllNotBlacklisted');
    let lengthSpy = jest.spyOn(participants, 'length');
    const sendRejectionSpy = jest.spyOn(VirtualGraduationEmailService, 'sendRejection');
    let lengthSpy = jest.spyOn(processedParticipants, 'length');

    test('sendRejectionToParticipants should call findAllNotBlacklistedSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendRejectionToParticipants();
      expect(findAllNotBlacklistedSpy).toBeCalled();
    });

    test('sendRejectionToParticipants should call lengthSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendRejectionToParticipants();
      expect(lengthSpy).toBeCalled();
    });

    test('sendRejectionToParticipants should call sendRejectionSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendRejectionToParticipants();
      expect(sendRejectionSpy).toBeCalled();
    });

    test('sendRejectionToParticipants should call lengthSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendRejectionToParticipants();
      expect(lengthSpy).toBeCalled();
    });
  });

  describe('test test function logic', () => {
    const findAllNotBlacklistedSpy = jest.spyOn(Participant, 'findAllNotBlacklisted');
    let lengthSpy = jest.spyOn(participants, 'length');
    const sendFirstReminderSpy = jest.spyOn(VirtualGraduationEmailService, 'sendFirstReminder');
    let lengthSpy = jest.spyOn(processedParticipants, 'length');

    test('sendFirstReminderToParticipants should call findAllNotBlacklistedSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendFirstReminderToParticipants();
      expect(findAllNotBlacklistedSpy).toBeCalled();
    });

    test('sendFirstReminderToParticipants should call lengthSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendFirstReminderToParticipants();
      expect(lengthSpy).toBeCalled();
    });

    test('sendFirstReminderToParticipants should call sendFirstReminderSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendFirstReminderToParticipants();
      expect(sendFirstReminderSpy).toBeCalled();
    });

    test('sendFirstReminderToParticipants should call lengthSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendFirstReminderToParticipants();
      expect(lengthSpy).toBeCalled();
    });
  });

  describe('test test function logic', () => {
    const findAllNotBlacklistedSpy = jest.spyOn(Participant, 'findAllNotBlacklisted');
    let lengthSpy = jest.spyOn(participants, 'length');
    const sendSecondReminderSpy = jest.spyOn(VirtualGraduationEmailService, 'sendSecondReminder');
    let lengthSpy = jest.spyOn(processedParticipants, 'length');

    test('sendSecondReminderToParticipants should call findAllNotBlacklistedSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendSecondReminderToParticipants();
      expect(findAllNotBlacklistedSpy).toBeCalled();
    });

    test('sendSecondReminderToParticipants should call lengthSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendSecondReminderToParticipants();
      expect(lengthSpy).toBeCalled();
    });

    test('sendSecondReminderToParticipants should call sendSecondReminderSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendSecondReminderToParticipants();
      expect(sendSecondReminderSpy).toBeCalled();
    });

    test('sendSecondReminderToParticipants should call lengthSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendSecondReminderToParticipants();
      expect(lengthSpy).toBeCalled();
    });
  });

  describe('test test function logic', () => {
    const findAllNotBlacklistedSpy = jest.spyOn(Participant, 'findAllNotBlacklisted');
    let lengthSpy = jest.spyOn(participants, 'length');
    const sendEmailRecoverySpy = jest.spyOn(VirtualGraduationEmailService, 'sendEmailRecovery');
    let lengthSpy = jest.spyOn(processedParticipants, 'length');

    test('sendEmailRecoveryToParticipants should call findAllNotBlacklistedSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendEmailRecoveryToParticipants();
      expect(findAllNotBlacklistedSpy).toBeCalled();
    });

    test('sendEmailRecoveryToParticipants should call lengthSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendEmailRecoveryToParticipants();
      expect(lengthSpy).toBeCalled();
    });

    test('sendEmailRecoveryToParticipants should call sendEmailRecoverySpy', async () => {
      VirtualGraduationEmailSchedulerService.sendEmailRecoveryToParticipants();
      expect(sendEmailRecoverySpy).toBeCalled();
    });

    test('sendEmailRecoveryToParticipants should call lengthSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendEmailRecoveryToParticipants();
      expect(lengthSpy).toBeCalled();
    });
  });

  describe('test test function logic', () => {
    const findAllSpy = jest.spyOn(Event, 'findAll');
    const EmailScheduledSpy = jest.spyOn(EventPreviewEmailStatus, 'EmailScheduled');
    const mapSpy = jest.spyOn(eventsReadyPreview, 'map');
    let clientSpy = jest.spyOn(eventWithPreview, 'client');
    let clientSpy = jest.spyOn(eventWithPreview, 'client');
    const mapUserToRecipientSpy = jest.spyOn(UserEmailService, 'mapUserToRecipient');
    const sendClipPreviewReadyForUsersSpy = jest.spyOn(UserEmailService, 'sendClipPreviewReadyForUsers');
    const updateSpy = jest.spyOn(eventWithPreview, 'update');
    const EmailSendSpy = jest.spyOn(EventPreviewEmailStatus, 'EmailSend');

    test('sendClipPreviewReadyToUsers should call findAllSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendClipPreviewReadyToUsers();
      expect(findAllSpy).toBeCalled();
    });

    test('sendClipPreviewReadyToUsers should call EmailScheduledSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendClipPreviewReadyToUsers();
      expect(EmailScheduledSpy).toBeCalled();
    });

    test('sendClipPreviewReadyToUsers should call mapSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendClipPreviewReadyToUsers();
      expect(mapSpy).toBeCalled();
    });

    test('sendClipPreviewReadyToUsers should call clientSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendClipPreviewReadyToUsers();
      expect(clientSpy).toBeCalled();
    });

    test('sendClipPreviewReadyToUsers should call clientSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendClipPreviewReadyToUsers();
      expect(clientSpy).toBeCalled();
    });

    test('sendClipPreviewReadyToUsers should call mapUserToRecipientSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendClipPreviewReadyToUsers();
      expect(mapUserToRecipientSpy).toBeCalled();
    });

    test('sendClipPreviewReadyToUsers should call sendClipPreviewReadyForUsersSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendClipPreviewReadyToUsers();
      expect(sendClipPreviewReadyForUsersSpy).toBeCalled();
    });

    test('sendClipPreviewReadyToUsers should call updateSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendClipPreviewReadyToUsers();
      expect(updateSpy).toBeCalled();
    });

    test('sendClipPreviewReadyToUsers should call EmailSendSpy', async () => {
      VirtualGraduationEmailSchedulerService.sendClipPreviewReadyToUsers();
      expect(EmailSendSpy).toBeCalled();
    });
  });

  describe('test test function logic', () => {
    let errorHandlerWrapperSpy = jest.spyOn(VirtualGraduationEmailService, 'errorHandlerWrapper');
    let errorHandlerWrapperSpy = jest.spyOn(VirtualGraduationEmailService, 'errorHandlerWrapper');
    let errorHandlerWrapperSpy = jest.spyOn(VirtualGraduationEmailService, 'errorHandlerWrapper');
    let errorHandlerWrapperSpy = jest.spyOn(VirtualGraduationEmailService, 'errorHandlerWrapper');
    let errorHandlerWrapperSpy = jest.spyOn(VirtualGraduationEmailService, 'errorHandlerWrapper');
    let errorHandlerWrapperSpy = jest.spyOn(VirtualGraduationEmailService, 'errorHandlerWrapper');
    let errorHandlerWrapperSpy = jest.spyOn(VirtualGraduationEmailService, 'errorHandlerWrapper');

    test('schedule should call errorHandlerWrapperSpy', async () => {
      VirtualGraduationEmailSchedulerService.schedule();
      expect(errorHandlerWrapperSpy).toBeCalled();
    });

    test('schedule should call errorHandlerWrapperSpy', async () => {
      VirtualGraduationEmailSchedulerService.schedule();
      expect(errorHandlerWrapperSpy).toBeCalled();
    });

    test('schedule should call errorHandlerWrapperSpy', async () => {
      VirtualGraduationEmailSchedulerService.schedule();
      expect(errorHandlerWrapperSpy).toBeCalled();
    });

    test('schedule should call errorHandlerWrapperSpy', async () => {
      VirtualGraduationEmailSchedulerService.schedule();
      expect(errorHandlerWrapperSpy).toBeCalled();
    });

    test('schedule should call errorHandlerWrapperSpy', async () => {
      VirtualGraduationEmailSchedulerService.schedule();
      expect(errorHandlerWrapperSpy).toBeCalled();
    });

    test('schedule should call errorHandlerWrapperSpy', async () => {
      VirtualGraduationEmailSchedulerService.schedule();
      expect(errorHandlerWrapperSpy).toBeCalled();
    });

    test('schedule should call errorHandlerWrapperSpy', async () => {
      VirtualGraduationEmailSchedulerService.schedule();
      expect(errorHandlerWrapperSpy).toBeCalled();
    });
  });
});
