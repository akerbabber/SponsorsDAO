import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  HackathonRegistration,
  HackerRegistration,
  LockedFundsHandled,
  SponsorRegistration,
  SponsorshipApproved,
  SponsorshipFunded,
  SponsorshipRequested,
  SponsorshipUnlocked,
  SponsorshipWithdrawn,
  TrailGiven,
  UpfrontGiven
} from "../generated/Contract/Contract"

export function createHackathonRegistrationEvent(
  hackathonIndex: BigInt
): HackathonRegistration {
  let hackathonRegistrationEvent = changetype<HackathonRegistration>(
    newMockEvent()
  )

  hackathonRegistrationEvent.parameters = new Array()

  hackathonRegistrationEvent.parameters.push(
    new ethereum.EventParam(
      "hackathonIndex",
      ethereum.Value.fromUnsignedBigInt(hackathonIndex)
    )
  )

  return hackathonRegistrationEvent
}

export function createHackerRegistrationEvent(
  hacker: Address
): HackerRegistration {
  let hackerRegistrationEvent = changetype<HackerRegistration>(newMockEvent())

  hackerRegistrationEvent.parameters = new Array()

  hackerRegistrationEvent.parameters.push(
    new ethereum.EventParam("hacker", ethereum.Value.fromAddress(hacker))
  )

  return hackerRegistrationEvent
}

export function createLockedFundsHandledEvent(
  hacker: Address,
  sponsor: Address,
  sponsorshipIndex: BigInt,
  hackathonIndex: BigInt,
  amount: BigInt
): LockedFundsHandled {
  let lockedFundsHandledEvent = changetype<LockedFundsHandled>(newMockEvent())

  lockedFundsHandledEvent.parameters = new Array()

  lockedFundsHandledEvent.parameters.push(
    new ethereum.EventParam("hacker", ethereum.Value.fromAddress(hacker))
  )
  lockedFundsHandledEvent.parameters.push(
    new ethereum.EventParam("sponsor", ethereum.Value.fromAddress(sponsor))
  )
  lockedFundsHandledEvent.parameters.push(
    new ethereum.EventParam(
      "sponsorshipIndex",
      ethereum.Value.fromUnsignedBigInt(sponsorshipIndex)
    )
  )
  lockedFundsHandledEvent.parameters.push(
    new ethereum.EventParam(
      "hackathonIndex",
      ethereum.Value.fromUnsignedBigInt(hackathonIndex)
    )
  )
  lockedFundsHandledEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return lockedFundsHandledEvent
}

export function createSponsorRegistrationEvent(
  sponsor: Address,
  hackathonIndex: BigInt
): SponsorRegistration {
  let sponsorRegistrationEvent = changetype<SponsorRegistration>(newMockEvent())

  sponsorRegistrationEvent.parameters = new Array()

  sponsorRegistrationEvent.parameters.push(
    new ethereum.EventParam("sponsor", ethereum.Value.fromAddress(sponsor))
  )
  sponsorRegistrationEvent.parameters.push(
    new ethereum.EventParam(
      "hackathonIndex",
      ethereum.Value.fromUnsignedBigInt(hackathonIndex)
    )
  )

  return sponsorRegistrationEvent
}

export function createSponsorshipApprovedEvent(
  hacker: Address,
  sponsor: Address,
  hackathonIndex: BigInt,
  sponsorshipIndex: BigInt
): SponsorshipApproved {
  let sponsorshipApprovedEvent = changetype<SponsorshipApproved>(newMockEvent())

  sponsorshipApprovedEvent.parameters = new Array()

  sponsorshipApprovedEvent.parameters.push(
    new ethereum.EventParam("hacker", ethereum.Value.fromAddress(hacker))
  )
  sponsorshipApprovedEvent.parameters.push(
    new ethereum.EventParam("sponsor", ethereum.Value.fromAddress(sponsor))
  )
  sponsorshipApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "hackathonIndex",
      ethereum.Value.fromUnsignedBigInt(hackathonIndex)
    )
  )
  sponsorshipApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "sponsorshipIndex",
      ethereum.Value.fromUnsignedBigInt(sponsorshipIndex)
    )
  )

  return sponsorshipApprovedEvent
}

export function createSponsorshipFundedEvent(
  sponsor: Address,
  hackathonIndex: BigInt,
  amount: BigInt
): SponsorshipFunded {
  let sponsorshipFundedEvent = changetype<SponsorshipFunded>(newMockEvent())

  sponsorshipFundedEvent.parameters = new Array()

  sponsorshipFundedEvent.parameters.push(
    new ethereum.EventParam("sponsor", ethereum.Value.fromAddress(sponsor))
  )
  sponsorshipFundedEvent.parameters.push(
    new ethereum.EventParam(
      "hackathonIndex",
      ethereum.Value.fromUnsignedBigInt(hackathonIndex)
    )
  )
  sponsorshipFundedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return sponsorshipFundedEvent
}

export function createSponsorshipRequestedEvent(
  hacker: Address,
  hackathonIndex: BigInt,
  amount: BigInt
): SponsorshipRequested {
  let sponsorshipRequestedEvent = changetype<SponsorshipRequested>(
    newMockEvent()
  )

  sponsorshipRequestedEvent.parameters = new Array()

  sponsorshipRequestedEvent.parameters.push(
    new ethereum.EventParam("hacker", ethereum.Value.fromAddress(hacker))
  )
  sponsorshipRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "hackathonIndex",
      ethereum.Value.fromUnsignedBigInt(hackathonIndex)
    )
  )
  sponsorshipRequestedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return sponsorshipRequestedEvent
}

export function createSponsorshipUnlockedEvent(
  hacker: Address,
  sponsor: Address,
  sponsorshipIndex: BigInt,
  hackathonIndex: BigInt,
  amount: BigInt
): SponsorshipUnlocked {
  let sponsorshipUnlockedEvent = changetype<SponsorshipUnlocked>(newMockEvent())

  sponsorshipUnlockedEvent.parameters = new Array()

  sponsorshipUnlockedEvent.parameters.push(
    new ethereum.EventParam("hacker", ethereum.Value.fromAddress(hacker))
  )
  sponsorshipUnlockedEvent.parameters.push(
    new ethereum.EventParam("sponsor", ethereum.Value.fromAddress(sponsor))
  )
  sponsorshipUnlockedEvent.parameters.push(
    new ethereum.EventParam(
      "sponsorshipIndex",
      ethereum.Value.fromUnsignedBigInt(sponsorshipIndex)
    )
  )
  sponsorshipUnlockedEvent.parameters.push(
    new ethereum.EventParam(
      "hackathonIndex",
      ethereum.Value.fromUnsignedBigInt(hackathonIndex)
    )
  )
  sponsorshipUnlockedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return sponsorshipUnlockedEvent
}

export function createSponsorshipWithdrawnEvent(
  hacker: Address,
  sponsorshipIndex: BigInt,
  hackathonIndex: BigInt,
  amount: BigInt
): SponsorshipWithdrawn {
  let sponsorshipWithdrawnEvent = changetype<SponsorshipWithdrawn>(
    newMockEvent()
  )

  sponsorshipWithdrawnEvent.parameters = new Array()

  sponsorshipWithdrawnEvent.parameters.push(
    new ethereum.EventParam("hacker", ethereum.Value.fromAddress(hacker))
  )
  sponsorshipWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "sponsorshipIndex",
      ethereum.Value.fromUnsignedBigInt(sponsorshipIndex)
    )
  )
  sponsorshipWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "hackathonIndex",
      ethereum.Value.fromUnsignedBigInt(hackathonIndex)
    )
  )
  sponsorshipWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return sponsorshipWithdrawnEvent
}

export function createTrailGivenEvent(
  hacker: Address,
  sponsor: Address,
  sponsorshipIndex: BigInt,
  hackathonIndex: BigInt,
  amount: BigInt
): TrailGiven {
  let trailGivenEvent = changetype<TrailGiven>(newMockEvent())

  trailGivenEvent.parameters = new Array()

  trailGivenEvent.parameters.push(
    new ethereum.EventParam("hacker", ethereum.Value.fromAddress(hacker))
  )
  trailGivenEvent.parameters.push(
    new ethereum.EventParam("sponsor", ethereum.Value.fromAddress(sponsor))
  )
  trailGivenEvent.parameters.push(
    new ethereum.EventParam(
      "sponsorshipIndex",
      ethereum.Value.fromUnsignedBigInt(sponsorshipIndex)
    )
  )
  trailGivenEvent.parameters.push(
    new ethereum.EventParam(
      "hackathonIndex",
      ethereum.Value.fromUnsignedBigInt(hackathonIndex)
    )
  )
  trailGivenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return trailGivenEvent
}

export function createUpfrontGivenEvent(
  hacker: Address,
  sponsor: Address,
  sponsorshipIndex: BigInt,
  hackathonIndex: BigInt,
  amount: BigInt
): UpfrontGiven {
  let upfrontGivenEvent = changetype<UpfrontGiven>(newMockEvent())

  upfrontGivenEvent.parameters = new Array()

  upfrontGivenEvent.parameters.push(
    new ethereum.EventParam("hacker", ethereum.Value.fromAddress(hacker))
  )
  upfrontGivenEvent.parameters.push(
    new ethereum.EventParam("sponsor", ethereum.Value.fromAddress(sponsor))
  )
  upfrontGivenEvent.parameters.push(
    new ethereum.EventParam(
      "sponsorshipIndex",
      ethereum.Value.fromUnsignedBigInt(sponsorshipIndex)
    )
  )
  upfrontGivenEvent.parameters.push(
    new ethereum.EventParam(
      "hackathonIndex",
      ethereum.Value.fromUnsignedBigInt(hackathonIndex)
    )
  )
  upfrontGivenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return upfrontGivenEvent
}
