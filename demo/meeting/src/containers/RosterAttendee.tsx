// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import {
  RosterCell,
  useAttendeeStatus
} from 'amazon-chime-sdk-component-library-react';

interface Props {
  attendeeId: string;
  name: string;
}

const RosterAttendee: React.FC<Props> = ({ attendeeId, name }) => {
  const { muted, videoEnabled, sharingContent } = useAttendeeStatus(attendeeId);

  return (
    <RosterCell
      name={name}
      muted={muted}
      videoEnabled={videoEnabled}
      sharingContent={sharingContent}
    />
  );
};

export default RosterAttendee;