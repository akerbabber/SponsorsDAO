import {
  HackathonRegistration as HackathonRegistrationEvent,
  HackerRegistration as HackerRegistrationEvent,
  LockedFundsHandled as LockedFundsHandledEvent,
  SponsorRegistration as SponsorRegistrationEvent,
  SponsorshipApproved as SponsorshipApprovedEvent,
  SponsorshipFunded as SponsorshipFundedEvent,
  SponsorshipRequested as SponsorshipRequestedEvent,
  SponsorshipUnlocked as SponsorshipUnlockedEvent,
  SponsorshipWithdrawn as SponsorshipWithdrawnEvent,
  TrailGiven as TrailGivenEvent,
  UpfrontGiven as UpfrontGivenEvent
} from "../generated/Contract/Contract"
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
} from "../generated/schema"

export function handleHackathonRegistration(
  event: HackathonRegistrationEvent
): void {
  let entity = new HackathonRegistration(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hackathonIndex = event.params.hackathonIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleHackerRegistration(event: HackerRegistrationEvent): void {
  let entity = new HackerRegistration(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hacker = event.params.hacker

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLockedFundsHandled(event: LockedFundsHandledEvent): void {
  let entity = new LockedFundsHandled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hacker = event.params.hacker
  entity.sponsor = event.params.sponsor
  entity.sponsorshipIndex = event.params.sponsorshipIndex
  entity.hackathonIndex = event.params.hackathonIndex
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSponsorRegistration(
  event: SponsorRegistrationEvent
): void {
  let entity = new SponsorRegistration(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sponsor = event.params.sponsor
  entity.hackathonIndex = event.params.hackathonIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSponsorshipApproved(
  event: SponsorshipApprovedEvent
): void {
  let entity = new SponsorshipApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hacker = event.params.hacker
  entity.sponsor = event.params.sponsor
  entity.hackathonIndex = event.params.hackathonIndex
  entity.sponsorshipIndex = event.params.sponsorshipIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSponsorshipFunded(event: SponsorshipFundedEvent): void {
  let entity = new SponsorshipFunded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sponsor = event.params.sponsor
  entity.hackathonIndex = event.params.hackathonIndex
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSponsorshipRequested(
  event: SponsorshipRequestedEvent
): void {
  let entity = new SponsorshipRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hacker = event.params.hacker
  entity.hackathonIndex = event.params.hackathonIndex
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSponsorshipUnlocked(
  event: SponsorshipUnlockedEvent
): void {
  let entity = new SponsorshipUnlocked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hacker = event.params.hacker
  entity.sponsor = event.params.sponsor
  entity.sponsorshipIndex = event.params.sponsorshipIndex
  entity.hackathonIndex = event.params.hackathonIndex
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSponsorshipWithdrawn(
  event: SponsorshipWithdrawnEvent
): void {
  let entity = new SponsorshipWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hacker = event.params.hacker
  entity.sponsorshipIndex = event.params.sponsorshipIndex
  entity.hackathonIndex = event.params.hackathonIndex
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTrailGiven(event: TrailGivenEvent): void {
  let entity = new TrailGiven(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hacker = event.params.hacker
  entity.sponsor = event.params.sponsor
  entity.sponsorshipIndex = event.params.sponsorshipIndex
  entity.hackathonIndex = event.params.hackathonIndex
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpfrontGiven(event: UpfrontGivenEvent): void {
  let entity = new UpfrontGiven(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hacker = event.params.hacker
  entity.sponsor = event.params.sponsor
  entity.sponsorshipIndex = event.params.sponsorshipIndex
  entity.hackathonIndex = event.params.hackathonIndex
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
